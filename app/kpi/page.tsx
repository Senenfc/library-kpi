import mockData from "@/mockData/mockData.json";
import Card from "@/components/Card";

export default function KPIList({ searchParams }: { searchParams: { search: string } }) {
    const kpis = mockData.kpis;

    // Filter KPIs by search params
    const searchText = searchParams.search || '';
    const filteredKPIs = kpis.filter((kpi) =>
        kpi.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-xl font-medium">KPI list</h2>
            <p className="font-normal text-xs mb-8 text-[#6d7b93]">
                List of all KPIs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredKPIs.length > 0 ? (
                    filteredKPIs.map((kpi) => <Card key={kpi.id} resource={kpi} />)
                ) : (
                    <p>No KPIs found</p>
                )}
            </div>

        </div>
    )
}