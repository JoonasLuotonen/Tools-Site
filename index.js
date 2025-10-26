export default function FallbackHome() {
  return (
    <main style={{padding:'48px 20px', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto'}}>
      <h1 style={{fontSize:32, margin:0}}>Tools by Joonas Luotonen</h1>
      <p style={{marginTop:12, maxWidth:680}}>
        If you see this, the site is live. App pages: <a href="/clarity">/clarity</a> and <a href="/about">/about</a>.
      </p>
    </main>
  );
}
