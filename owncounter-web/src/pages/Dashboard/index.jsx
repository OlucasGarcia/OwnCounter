import DashboardLayout from "../../layouts/DashboardLayout";

import EmptyState from "../../components/EmptyState";

import marketImage from "../../assets/market.png";

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <EmptyState
                title="Ainda não há registros ;-;"
                buttonText="+ NOVO REGISTRO"
                image={marketImage}
            />
        </DashboardLayout>
    );
}