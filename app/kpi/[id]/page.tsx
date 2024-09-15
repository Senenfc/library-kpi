import BaseModal from "@/components/modals/BaseModal";
import KPIModal from "@/components/modals/KPIModal";
import mockData from "@/mockData/mockData.json"

export const dynamicParams = false;

export function generateStaticParams() {
    const slugs = mockData.kpis.map((kpi) => kpi.id.toString());
    return slugs.map((slug) => ({ id: slug }));
}

export default function KPIDetails({ params }: { params: { id: string } }) {
    return (
        <div>
            <BaseModal>
                <KPIModal params={params} />
            </BaseModal>
        </div>
    )
}