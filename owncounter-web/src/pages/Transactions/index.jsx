import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import TransactionForm from "../../components/TransactionForm";

import TransactionList from "../../components/TransactionList";

import Button from "../../components/Button";

import { useFinance } from "../../context/FinanceContext";

export default function Transactions() {
    const { transactions } =
        useFinance();

    const [showForm, setShowForm] =
        useState(false);

    return (
        <DashboardLayout title="Movimentações">
            <div className="flex flex-col gap-10">

                <div className="flex justify-begin">
                    <Button
                        onClick={() =>
                            setShowForm(!showForm)
                        }
                    >
                        + NOVO REGISTRO
                    </Button>
                </div>

                {showForm && (
                    <TransactionForm
                        closeForm={() =>
                            setShowForm(false)
                        }
                    />
                )}

                <TransactionList
                    transactions={transactions}
                />

            </div>
        </DashboardLayout>
    );
}