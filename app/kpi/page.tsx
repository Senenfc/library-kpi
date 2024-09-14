import React from "react";
import mockData from "../../mockData/mockData.json";
import Card from "../../components/Card";

export default function KPIList() {
    const kpis = mockData.kpis;

    return <div>
        {kpis.map((kpi) => <Card key={kpi.id} resource={kpi} />)}
    </div>
}