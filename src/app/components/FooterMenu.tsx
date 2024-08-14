export default function FooterMenu({ title, menu }: any) {
    return (
        <div className="block space-y-4">
            <h3 className="font-bold text-2xl block">{title}</h3>
            <div className="flex flex-col space-y-4">
                {menu.map((item: any) => (
                    <a
                        href={item.url}
                        className="text-xl"
                        key={item.label}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}