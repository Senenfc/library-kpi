import BaseModal from "@/components/modals/BaseModal";
import KPIModal from "@/components/modals/KPIModal";
import { Suspense } from "react";

// intercept and parallel routes for show modal and can load by url
export default function KPIModalPage({params}: {params: {id: string}}) {
    return (
        <Suspense fallback={<>Loading...</>}>
            <BaseModal>
                <KPIModal params={params} />
            </BaseModal>
        </Suspense>
    )
}