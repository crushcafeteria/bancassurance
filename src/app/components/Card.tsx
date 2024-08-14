import { nanoid } from "nanoid";

export default function Card({ item }: any) {
    return (
        <div className="w-full py-14 bg-center bg-cover aspect-auto space-y-6 text-white rounded-lg hover:shadow-lg" style={{
            backgroundImage: `url("${item.image}")`
        }}>
            <h3 className="font-bold text-2xl drop-shadow-lg">{item.label}</h3>
            <button className=" capitalize border-2 border-white px-3 py-1 rounded-lg shadow-lg font-semibold hover:bg-earth hover:text-banana">Learn More</button>
        </div>
    )
}