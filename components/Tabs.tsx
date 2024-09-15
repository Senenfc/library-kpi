import TabButton from "./TabButton";

export default function Tabs() {
    const tabOptions = [
        { path: '/', text: 'Featured' },
        { path: '/kpi', text: 'KPI' },
        { path: '/layouts', text: 'Layouts' },
        { path: '/storyboards', text: 'Storyboards' }
    ];

    return (
        <section className="flex gap-2 justify-between text-xs p-1 bg-[#f1f5f9] text-[#6d7b93] rounded">
            {tabOptions.map((tabOption) => {
                return <TabButton key={tabOption.path} {...tabOption} />
            })}
        </section>
    )
}