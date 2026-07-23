import { useState } from 'react'

const Icon = ({ path, size = 18, color = 'currentColor', children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
)

const IconBell = (p) => <Icon {...p}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></Icon>
const IconEye = (p) => <Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></Icon>
const IconEyeOff = (p) => <Icon {...p}><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10-7-10-7a18.4 18.4 0 0 1 4.22-5.06M9.9 4.24A9.1 9.1 0 0 1 12 4c6.5 0 10 7 10 7a18.4 18.4 0 0 1-2.16 3.19" /><path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" /><path d="M1 1l22 22" /></Icon>
const IconArrowUpRight = (p) => <Icon {...p}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></Icon>
const IconReceipt = (p) => <Icon {...p}><path d="M4 3h16v18l-3-2-3 2-3-2-3 2-3-2-3 2Z" /><path d="M8 8h8M8 12h8M8 16h4" /></Icon>
const IconCard = (p) => <Icon {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></Icon>
const IconDots = (p) => <Icon {...p}><circle cx="5" cy="12" r="1.4" fill={p.color || 'currentColor'} /><circle cx="12" cy="12" r="1.4" fill={p.color || 'currentColor'} /><circle cx="19" cy="12" r="1.4" fill={p.color || 'currentColor'} /></Icon>
const IconMoon = (p) => <Icon {...p}><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" /></Icon>
const IconBank = (p) => <Icon {...p}><path d="M3 21h18M4 21V9l8-5 8 5v12M9 21v-6h6v6" /></Icon>
const IconHome = (p) => <Icon {...p}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /></Icon>
const IconCar = (p) => <Icon {...p}><path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 12l2-5h14l2 5v5H3v-5Z" /></Icon>
const IconWallet = (p) => <Icon {...p}><path d="M3 7h15a3 3 0 0 1 3 3v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><path d="M16 12h3" /></Icon>
const IconQr = (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM20 14v3M14 20h3" /></Icon>
const IconChartPie = (p) => <Icon {...p}><path d="M21.2 15.2A10 10 0 1 1 12 2v10.2Z" /></Icon>
const IconUser = (p) => <Icon {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></Icon>

const star8 = "M23 4 L27 15 L38 11 L31 21 L42 25 L31 27 L35 38 L25 31 L21 42 L17 31 L6 35 L13 25 L2 21 L13 17 L9 6 L19 13 Z"

const quickActions = [
  { label: 'Transfer', Icon: IconArrowUpRight },
  { label: 'Pay bills', Icon: IconReceipt },
  { label: 'Cards', Icon: IconCard },
  { label: 'More', Icon: IconDots },
]

const activity = [
  { label: 'Profit distribution', time: 'Today, 6:02 AM', amount: '+$4,210.00', positive: true, Icon: IconBank },
  { label: 'Emirates Living villa', time: 'Yesterday, 2:14 PM', amount: '-$2,300,000.00', positive: false, Icon: IconHome },
  { label: 'Subaru BRZ · full payoff', time: 'Mon, 11:30 AM', amount: '-$38,500.00', positive: false, Icon: IconCar },
]

export default function App() {
  const [hidden, setHidden] = useState(false)

  return (
    <div style={{ width: 390, minHeight: '100vh', background: '#FFFFFF', margin: '0 auto', padding: '0 0 24px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '28px 22px 0' }}>
        <div>
          <p style={{ margin: 0, fontSize: 12, color: '#7A857F' }}>Assalamu alaikum</p>
          <p style={{ margin: '2px 0 0', fontSize: 18, fontWeight: 600, color: '#142420' }}>Zahra</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F4F3EE', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #E7E4D9' }}>
            <IconBell size={16} color="#142420" />
          </div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#0B4A3F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#E9D9A8' }}>ZK</div>
        </div>
      </div>

      <div style={{ margin: '18px 22px 0', position: 'relative', background: '#0B4A3F', borderRadius: 20, padding: '22px 20px 20px', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 320 190" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="star8" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d={star8} fill="none" stroke="#E9D9A8" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="320" height="190" fill="url(#star8)" />
        </svg>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0, fontSize: 12, color: '#BFD8CD', letterSpacing: '0.02em' }}>Current account · Everyday Islamic</p>
            <button
              onClick={() => setHidden(h => !h)}
              aria-label={hidden ? 'Show balance' : 'Hide balance'}
              style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', display: 'flex' }}
            >
              {hidden ? <IconEyeOff size={17} color="#BFD8CD" /> : <IconEye size={17} color="#BFD8CD" />}
            </button>
          </div>

          <p style={{ margin: '16px 0 0', fontSize: 34, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>
            {hidden ? '••••••••' : (
              <>
                $10,567,983<span style={{ fontSize: 18, color: '#BFD8CD', fontWeight: 500 }}>.00</span>
              </>
            )}
          </p>

          <div style={{ height: 1, background: 'rgba(233,217,168,0.35)', margin: '18px 0 12px' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontSize: 10, color: '#8FB3A4', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Account number</p>
              <p style={{ margin: '2px 0 0', fontSize: 13, color: '#E9D9A8', fontWeight: 600, letterSpacing: '0.03em' }}>AE12 0400 1234 5678 9012 3</p>
            </div>
            <IconMoon size={20} color="#E9D9A8" />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 22px 0' }}>
        {quickActions.map(({ label, Icon: ActionIcon }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 76 }}>
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#0B4A3F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ActionIcon size={20} color="#E9D9A8" />
            </div>
            <span style={{ fontSize: 11.5, color: '#142420', textAlign: 'center' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ margin: '26px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#142420' }}>Recent activity</p>
        <p style={{ margin: 0, fontSize: 12, color: '#0B4A3F', fontWeight: 600, cursor: 'pointer' }}>See all</p>
      </div>

      <div style={{ margin: '10px 22px 0' }}>
        {activity.map((a, i) => (
          <div
            key={a.label}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 0',
              borderBottom: i < activity.length - 1 ? '1px solid #EFEDE4' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#EAF1EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a.Icon size={16} color="#0B4A3F" />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#142420' }}>{a.label}</p>
                <p style={{ margin: '1px 0 0', fontSize: 11.5, color: '#9AA39C' }}>{a.time}</p>
              </div>
            </div>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: a.positive ? '#1F7A5C' : '#142420' }}>{a.amount}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 26, padding: '16px 0 4px', borderTop: '1px solid #EFEDE4' }}>
        <IconHome size={20} color="#0B4A3F" />
        <IconWallet size={20} color="#C9C6B8" />
        <IconQr size={20} color="#C9C6B8" />
        <IconChartPie size={20} color="#C9C6B8" />
        <IconUser size={20} color="#C9C6B8" />
      </div>

    </div>
  )
}
