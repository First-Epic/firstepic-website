export default async (request, context) => {
  // 1. CONFIGURATION
  const MY_PASSWORD = Deno.env.get("DECK_PASSWORD") || "invest2026";
  const COOKIE_NAME = "first-epic-session";
  const url = new URL(request.url);
  let show_error = false;
  
  // --- NEW: BYPASS FOR FORM SUBMISSIONS ---
  // If the request has our secret "VIP Badge" header, let it through.
  if (request.headers.get("x-bypass-auth") === "true") {
    return context.next();
  }
  // ----------------------------------------

  // 2. CHECK FOR EXISTING SESSION
  const cookie = context.cookies.get(COOKIE_NAME);
  if (cookie === MY_PASSWORD) {
    const response = await context.next();
    // Destroy key on close
    response.headers.set("Set-Cookie", `${COOKIE_NAME}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Lax`);
    return response;
  }

  // 3. HANDLE LOGIN ATTEMPT (POST)
  if (request.method === "POST") {
    try {
      const body = await request.formData();
      if (body.get("password") === MY_PASSWORD) {
        context.cookies.set({
          name: COOKIE_NAME,
          value: MY_PASSWORD,
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
        });
        return new Response(null, {
          status: 302,
          headers: { Location: url.pathname },
        });
      } else {
        show_error = true;
      }
    } catch (e) {}
  }

  // 4. RENDER LOGIN UI
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Restricted Access</title>
      <style>
        body { background-color: #050505; color: #ffffff; font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .login-card { background: #0A0A0A; border: 1px solid #333; border-radius: 12px; padding: 40px; max-width: 360px; width: 90%; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        h1 { font-size: 18px; font-weight: 600; margin: 0 0 12px 0; color: #fff; }
        p { font-size: 14px; color: #888; margin: 0 0 24px 0; line-height: 1.5; }
        input { width: 100%; background: #111; border: 1px solid #333; color: white; padding: 12px 16px; border-radius: 6px; outline: none; font-size: 14px; box-sizing: border-box; margin-bottom: 12px; transition: border 0.2s; }
        input:focus { border-color: #666; }
        button { width: 100%; background: #ffffff; color: #000; border: none; padding: 12px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 14px; transition: opacity 0.2s; }
        button:hover { opacity: 0.9; }
        .error-msg { color: #ef4444; font-size: 13px; margin-top: 15px; display: ${show_error ? 'block' : 'none'}; animation: shake 0.4s ease-in-out; }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
      </style>
    </head>
    <body>
      <div class="login-card">
        <h1>Restricted Access</h1>
        <p>Please enter the password to access the investment details.</p>
        <form method="POST">
          <input type="password" name="password" placeholder="Password" autofocus required>
          <button type="submit">View Deck</button>
        </form>
        <div class="error-msg">Incorrect password. Please try again.</div>
      </div>
    </body>
    </html>
  `;

  return new Response(html, { headers: { "content-type": "text/html" }});
};