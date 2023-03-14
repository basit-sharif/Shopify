const Arrays: number[] = [1];

export default function DummyData() {
    return (
        <div className="text-center">
            <p className="py-4 sm:py-8 text-sm sm:text-2xl w-8/12 mx-auto">
                We design durable travel apparel with a conscience — 100% made in America.
                Products by United By Blue. Video by Seth Morrisey.
            </p>
            <p className="text-xl">See down for components</p>
            <h3 className="text-4xl font-bold "><span className="underline">Men</span> Women</h3>
            <div className="flex justify-center flex-wrap space-x-8 space-y-10 pt-1 sm:pt-4 pb-8 sm:pb-16">
                <div></div>
                {Arrays.map((item: number, index: number) => (
                    <div key={index+1100} className="w-64 h-auto bg-blue-400 p-2 rounded-md">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, blanditiis voluptates voluptas alias possimus perspiciatis. Dolorum debitis obcaecati temporibus, voluptates earum assumenda hic recusandae officiis neque? Quis, saepe ut? Labore sed itaque fugit veritatis sapiente harum in distinctio! Qui blanditiis aliquam, modi ullam, quos officiis error odio inventore accusamus fuga itaque earum officia necessitatibus sed repudiandae. Voluptatibus fugit .</p>
                        <button className="py-2 px-6 bg-gray-500 rounded-lg hover:bg-gray-600 duration-200 hover:scale-105 active:scale-100 active:bg-gray-700">see Down for components</button>
                    </div>
                ))}
            </div>
            <button className="underline">View More</button>
            
        </div>
    )
}