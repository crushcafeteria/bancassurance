const topBar = [
    {
        label: 'Investor Relations',
        url: '#',
    },
    {
        label: 'Online Banking',
        url: '#',
    },
    {
        label: 'Property Sales',
        url: '#',
    },
    {
        label: 'NatBank Investments',
        url: '#',
    },
    {
        label: 'Treasury Services',
        url: '#',
    },
    {
        label: 'Contact Us',
        url: '#',
    },
]

export default function TopBar() {
    return (
        <>
            <div className="bg-earth text-banana">
                <div className="container mx-auto py-4">
                    <div className="flex space-x-4 justify-end">
                        {topBar.map((item, idx) => (
                            <div className={`flex-shrink order-[${topBar.length - idx}]`} key={item.label}>
                                <a
                                    href={item.url}
                                    className="text-sm"
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}