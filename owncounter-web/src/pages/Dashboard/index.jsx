import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import Button from "../../components/Button";
import EmptyState from "../../components/EmptyState";
import SummaryCard from "../../components/SummaryCard";
import PeriodFilter from "../../components/PeriodFilter";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";
import FinanceChart from "../../components/FinanceChart";

import { generateChartData, } from "../../utils/filters";
import { useFinance } from "../../context/FinanceContext";
import { filterTransactions } from "../../utils/filters";
import { formatCurrency } from "../../utils/currency";

import emptyImage from "../../assets/market.png";

export default function Dashboard() {
    const { transactions } =
        useFinance();

    const [period, setPeriod] =
        useState("today");

    const filteredTransactions =
        useMemo(() => {
            return filterTransactions(
                transactions,
                period
            );
        }, [transactions, period]);

    const income =
        filteredTransactions
            .filter((t) => t.type === "income")
            .reduce(
                (acc, item) =>
                    acc + item.amount,
                0
            );

    const expense =
        filteredTransactions
            .filter((t) => t.type === "expense")
            .reduce(
                (acc, item) =>
                    acc + item.amount,
                0
            );

    const balance =
        income - expense;

    const latestTransactions =
        [...filteredTransactions]
            .reverse()
            .slice(0, 3);

    const chartData =
        generateChartData(
            filteredTransactions
        );

    const [showForm, setShowForm] =
        useState(false);

    return (
        <DashboardLayout title="Dashboard">
            <div className="flex flex-col gap-10">

                <div className="flex items-center justify-between">
                    <PeriodFilter
                        current={period}
                        setCurrent={setPeriod}
                    />

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

                {filteredTransactions.length === 0 ? (
                    <EmptyState
                        title="Ops, infelizmente ainda não há dados o suficiente nessa página ;-;"
                        image={emptyImage}
                    />
                ) : (
                    <>
                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                xl:grid-cols-3
                                gap-8
                            "
                        >
                            <SummaryCard
                                title="Receita"
                                value={formatCurrency(
                                    income
                                )}
                                bgColor="#DFFFD7"
                                textColor="#57E83B"
                                borderColor="#57E83B"
                            />

                            <SummaryCard
                                title="Despesas"
                                value={formatCurrency(
                                    expense
                                )}
                                bgColor="#FFF0DF"
                                textColor="#FF7A1A"
                                borderColor="#FF7A1A"
                            />

                            <SummaryCard
                                title="Saldo"
                                value={formatCurrency(
                                    balance
                                )}
                                bgColor="#ECEBFF"
                                textColor="#5058CF"
                                borderColor="#5058CF"
                            />
                        </div>

                        <div
                            className="
                                grid
                                grid-cols-1
                                xl:grid-cols-2
                                gap-12
                            "
                        >

                            <div>
                                <h2
                                    className="
                    text-3xl font-bold mb-6
                  "
                                >
                                    Últimas movimentações
                                </h2>

                                <TransactionList
                                    transactions={
                                        latestTransactions
                                    }
                                />
                            </div>

                            <div>
                                <h2
                                    className="
                    text-3xl font-bold mb-6
                  "
                                >
                                    Relatórios visuais
                                </h2>

                                <FinanceChart data={chartData} />

                            </div>

                        </div>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
}