'use client';

export default function Home() {
  const buddyList = [
    { name: 'GZA', status: 'online' },
    { name: 'RZA', status: 'online' },
    { name: 'Method Man', status: 'online' },
    { name: 'Raekwon', status: 'online' },
    { name: 'Ghostface', status: 'online' },
    { name: 'Inspectah Deck', status: 'online' },
    { name: 'ODB', status: 'online' },
    { name: 'Bearack-Oclawma', status: 'online' },
    { name: 'Ginger', status: 'online' },
  ];

  const services = [
    {
      icon: '🤖',
      title: 'AI Agent Architecture',
      desc: 'Custom multi-agent systems that replace agency workflows.',
      price: '$2,500–$5,000 setup + $500–$1,500/mo',
    },
    {
      icon: '🌐',
      title: 'Website Design & Development',
      desc: 'Professional sites built and deployed in 48 hours.',
      price: '48-hour delivery',
    },
    {
      icon: '🖥️',
      title: 'IT Consulting & Infrastructure',
      desc: 'Active Directory, GSuite, MDM, VMware, networking. The full stack.',
      price: 'Enterprise stack, full service',
    },
    {
      icon: '📣',
      title: 'Full Marketing Campaigns',
      desc: 'Ads, email, SMS, social, landing pages — end to end.',
      price: 'Ads, email, SMS, social, landing pages',
    },
    {
      icon: '📍',
      title: 'Google Business Profile',
      desc: 'Setup and optimization to dominate local search.',
      price: 'Setup + optimization',
    },
    {
      icon: '🔧',
      title: 'Monthly Maintenance & Support',
      desc: 'Hands-off for you. All systems go for us.',
      price: 'Ongoing, hands-off for you',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#008080' }}>
      
      {/* OUTER WINDOW FRAME */}
      <div style={{
        margin: '8px auto',
        width: '100%',
        maxWidth: '1100px',
        background: '#C0C0C0',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 16px)',
      }}>

        {/* TITLE BAR */}
        <div className="title-bar" style={{ padding: '3px 4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px' }}>🌐</span>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>AbearicaOnline — Welcome Screen</span>
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            <div className="title-bar-btn">_</div>
            <div className="title-bar-btn">□</div>
            <div className="title-bar-btn" style={{ background: '#C0C0C0', fontWeight: 'bold' }}>✕</div>
          </div>
        </div>

        {/* MENU BAR */}
        <div style={{
          background: '#C0C0C0',
          borderBottom: '1px solid #808080',
          padding: '2px 4px',
          display: 'flex',
          gap: '2px',
          fontSize: '11px',
        }}>
          {['File', 'Edit', 'View', 'People', 'Mail', 'Help'].map(item => (
            <span key={item} style={{
              padding: '1px 8px',
              cursor: 'default',
              borderRadius: '0',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#FFF')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#000')}
            >{item}</span>
          ))}
        </div>

        {/* AOL TOOLBAR */}
        <div className="aol-toolbar">
          <div style={{ marginRight: '8px', fontWeight: 'bold', fontSize: '12px', color: '#000080' }}>
            AOL® 9.0
          </div>
          {[
            { icon: '📧', label: 'Read Mail' },
            { icon: '✏️', label: 'Write' },
            { icon: '📁', label: 'My Files' },
            { icon: '🌐', label: 'Internet' },
            { icon: '📅', label: 'Calendar' },
            { icon: '👥', label: 'People' },
          ].map(btn => (
            <button key={btn.label} className="btn-raised" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px', padding: '4px 8px', fontSize: '10px' }}>
              <span style={{ fontSize: '14px' }}>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '10px' }}>Keyword:</span>
            <div className="panel-inset" style={{ width: '160px', height: '20px', background: '#fff', fontSize: '10px', padding: '2px 4px', fontFamily: 'monospace' }}>
              abearicaonline
            </div>
            <button className="btn-raised" style={{ fontSize: '10px' }}>GO</button>
          </div>
        </div>

        {/* WELCOME BANNER */}
        <div className="welcome-banner">
          🐻 Welcome, Abearica! You&apos;ve Got Projects. 🐻
        </div>

        {/* MAIN CONTENT AREA */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

          {/* LEFT SIDEBAR — AOL CHANNELS */}
          <div style={{
            width: '140px',
            minWidth: '140px',
            background: 'linear-gradient(to bottom, #00007F, #000080)',
            borderRight: '2px solid #404040',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              background: '#0000AA',
              color: '#FFD700',
              fontWeight: 'bold',
              fontSize: '10px',
              padding: '4px 8px',
              textAlign: 'center',
              borderBottom: '1px solid #0000FF',
            }}>
              CHANNELS
            </div>
            <nav style={{ flex: 1 }}>
              {[
                { label: '📋 About', href: '#about' },
                { label: '💼 Services', href: '#services' },
                { label: '🗂️ Portfolio', href: '#portfolio' },
                { label: '📬 Contact', href: '#contact' },
              ].map(link => (
                <a key={link.label} href={link.href} style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '5px 8px',
                  display: 'block',
                  borderBottom: '1px solid #00004F',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0000CC')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div style={{ padding: '8px', borderTop: '1px solid #00004F' }}>
              <div style={{ color: '#FFD700', fontSize: '9px', fontWeight: 'bold', marginBottom: '4px' }}>KEYWORD</div>
              <div style={{ background: '#000040', border: '1px solid #0066CC', color: '#00FF00', fontSize: '9px', padding: '2px 4px', fontFamily: 'monospace' }}>
                abearicaonline
              </div>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '8px', background: '#DFDFDF' }}>

            {/* ABOUT SECTION */}
            <div id="about" style={{ marginBottom: '12px' }}>
              <div className="win-frame">
                <div className="title-bar">
                  <span>C:\ABEARICA\about.txt</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <div className="title-bar-btn">_</div>
                    <div className="title-bar-btn">□</div>
                    <div className="title-bar-btn">✕</div>
                  </div>
                </div>
                <div style={{ padding: '10px', background: '#FFFFFF', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  {/* Bear avatar */}
                  <div style={{ flexShrink: 0 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      border: '2px inset #808080',
                      overflow: 'hidden',
                      borderTop: '2px solid #808080',
                      borderLeft: '2px solid #808080',
                      borderRight: '2px solid #DFDFDF',
                      borderBottom: '2px solid #DFDFDF',
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/bear.png"
                        alt="Abearica"
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '9px', marginTop: '2px', color: '#000080', fontWeight: 'bold' }}>
                      Abearica
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '8px', color: '#008000' }}>
                      ● online
                    </div>
                  </div>
                  {/* Bio */}
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', lineHeight: '1.5', color: '#000' }}>
                      I&apos;m Tim — aka Abearica. 43 years old. Oregon. <strong>23 years of IT experience</strong> — Active Directory, GSuite, MDM, VMware, networking, the full enterprise stack. Today I run a team of 9 AI agents that delivers what used to take agencies weeks, in hours. Serial entrepreneur. Father of two. I never stop. I never give up.
                    </p>
                    <div style={{
                      background: '#000080',
                      color: '#FFD700',
                      fontWeight: 'bold',
                      fontSize: '11px',
                      padding: '4px 10px',
                      fontFamily: 'Courier New, monospace',
                      display: 'inline-block',
                    }}>
                      AI-Powered. Human-Tested. 23 Years in the Making.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICES SECTION */}
            <div id="services" style={{ marginBottom: '12px' }}>
              <div className="win-frame">
                <div className="title-bar">
                  <span>C:\ABEARICA\services.txt</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <div className="title-bar-btn">_</div>
                    <div className="title-bar-btn">□</div>
                    <div className="title-bar-btn">✕</div>
                  </div>
                </div>
                <div style={{ padding: '8px', background: '#DFDFDF' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '8px' }}>
                    {services.map((svc) => (
                      <div key={svc.title} className="service-card">
                        <div style={{ fontSize: '18px', marginBottom: '4px' }}>{svc.icon}</div>
                        <div style={{ fontWeight: 'bold', fontSize: '11px', color: '#000080', marginBottom: '3px' }}>{svc.title}</div>
                        <div style={{ fontSize: '10px', color: '#333', marginBottom: '4px', lineHeight: '1.4' }}>{svc.desc}</div>
                        <div style={{
                          fontSize: '9px',
                          color: '#000',
                          background: '#C0C0C0',
                          borderTop: '1px solid #808080',
                          borderLeft: '1px solid #808080',
                          borderRight: '1px solid #DFDFDF',
                          borderBottom: '1px solid #DFDFDF',
                          padding: '2px 4px',
                          fontFamily: 'monospace',
                        }}>
                          {svc.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="contact" style={{ textAlign: 'center', marginTop: '12px', paddingTop: '8px', borderTop: '1px solid #808080' }}>
                    <a href="mailto:abigailleahgoldberg@gmail.com" className="cta-btn">
                      [ START A PROJECT ]
                    </a>
                    <div style={{ fontSize: '10px', color: '#555', marginTop: '6px', fontFamily: 'monospace' }}>
                      abigailleahgoldberg@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PORTFOLIO SECTION */}
            <div id="portfolio" style={{ marginBottom: '8px' }}>
              <div className="win-frame">
                <div className="title-bar">
                  <span>C:\ABEARICA\portfolio.txt</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <div className="title-bar-btn">_</div>
                    <div className="title-bar-btn">□</div>
                    <div className="title-bar-btn">✕</div>
                  </div>
                </div>
                <div style={{ padding: '8px', background: '#FFFFFF' }}>
                  <div style={{
                    background: '#FFFFC0',
                    border: '1px solid #CC8800',
                    padding: '8px',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                  }}>
                    <div style={{ color: '#000080', fontWeight: 'bold', marginBottom: '4px' }}>▶ RECENT WORK</div>
                    <div style={{ lineHeight: '1.8', color: '#333' }}>
                      ✓ Full campaign suite delivered in 2 hours (HNHSI)<br/>
                      ✓ AI agent team managing $28K+/mo marketing pipeline<br/>
                      ✓ Enterprise IT modernization — 500+ device MDM rollout<br/>
                      ✓ Multi-agent content + ads engine for local business<br/>
                      ✓ AbearicaOnline.com — built and deployed in 48 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR — BUDDY LIST */}
          <div style={{
            width: '160px',
            minWidth: '160px',
            background: '#C0C0C0',
            borderLeft: '2px solid #808080',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Buddy List window */}
            <div className="win-frame" style={{ margin: '4px', flex: 1 }}>
              <div className="title-bar" style={{ fontSize: '10px' }}>
                <span>🤝 Buddy List</span>
                <div className="title-bar-btn" style={{ fontSize: '8px' }}>✕</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '4px' }}>
                <div style={{
                  background: '#000080',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 'bold',
                  padding: '2px 4px',
                  marginBottom: '4px',
                }}>
                  Online ({buddyList.length})
                </div>
                {buddyList.map((buddy) => (
                  <div key={buddy.name} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '2px 4px',
                    fontSize: '10px',
                    cursor: 'default',
                    borderBottom: '1px solid #E0E0E0',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = '#FFF')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#000')}
                  >
                    <span style={{ color: '#00AA00', fontSize: '8px' }}>●</span>
                    <span>{buddy.name}</span>
                  </div>
                ))}
                <div style={{ marginTop: '6px', borderTop: '1px solid #808080', paddingTop: '4px' }}>
                  <div style={{ fontSize: '9px', color: '#555', textAlign: 'center' }}>
                    AI Clan Active
                  </div>
                  <div style={{ fontSize: '8px', color: '#008000', textAlign: 'center', fontWeight: 'bold' }}>
                    All Systems GO
                  </div>
                </div>
              </div>
            </div>

            {/* Mini ad / promo */}
            <div style={{
              margin: '4px',
              background: '#000080',
              color: '#FFD700',
              fontSize: '9px',
              padding: '6px',
              textAlign: 'center',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}>
              <div>🐻 ABEARICA</div>
              <div style={{ color: '#FFF', fontSize: '8px', marginTop: '2px' }}>Klamath Falls, OR</div>
              <div style={{ color: '#00FF00', fontSize: '8px' }}>23yr experience</div>
            </div>
          </div>

        </div>

        {/* STATUS BAR */}
        <div className="status-bar">
          <span className="status-panel">✅ Connected to AbearicaOnline</span>
          <span className="status-panel">📍 Klamath Falls, OR</span>
          <span className="status-panel">⚡ Speed: 23yr/experience</span>
          <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#555' }}>
            © 2024 AbearicaOnline | All Rights Reserved
          </span>
        </div>

      </div>
    </div>
  );
}
