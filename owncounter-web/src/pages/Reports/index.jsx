import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import SummaryCard from "../../components/SummaryCard";

import PeriodFilter from "../../components/PeriodFilter";

import FinanceChart from "../../components/FinanceChart";

import ExpenseIncomeChart from "../../components/ExpenseIncomeChart";

import EmptyState from "../../components/EmptyState";

import { useFinance } from "../../context/FinanceContext";

import {
    filterTransactions,
    generateChartData,
    generateComparisonData,
} from "../../utils/filters";

import { formatCurrency } from "../../utils/currency";

import emptyImage from "../../assets/market.png";

export default function Reports() {
    const { transactions } =
        useFinance();

    const [period, setPeriod] =
        useState("month");

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

    const chartData =
        generateChartData(
            filteredTransactions
        );

    const comparisonData =
        generateComparisonData(
            filteredTransactions
        );

    return (
        <DashboardLayout title="Relatórios">
            <div className="flex flex-col gap-6 md:gap-10">

                {/* Header */}
                <div
                    className="
                        flex flex-col
                        md:flex-row
                        items-start
                        md:items-center
                        justify-between
                        gap-4
                    "
>
                    <PeriodFilter
                        current={period}
                        setCurrent={setPeriod}
                    />
                </div>

                {/* Estado vazio */}
                {filteredTransactions.length === 0 ? (
                    <EmptyState
                        title="Ainda não existem dados suficientes para gerar relatórios."
                        image={emptyImage}
                    />
                ) : (
                    <>
                        {/* Cards */}
                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                xl:grid-cols-3
                                gap-6
                                md:gap-8
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
                                lg:grid-cols-2
                                gap-8
                            "
                        >

                            <div>
                                <h2
                                    className="
                    text-xl
                    md:text-2xl
                    font-bold
                    mb-4
                    md:mb-5
                  "
                                >
                                    Evolução financeira
                                </h2>

                                <FinanceChart
                                    data={chartData}
                                />
                            </div>

                            <div>
                                <h2
                                    className="
                    text-xl
                    md:text-2xl
                    font-bold
                    mb-4
                    md:mb-5
                  "
                                >
                                    Receita x Despesa
                                </h2>

                                <ExpenseIncomeChart
                                    data={comparisonData}
                                />
                            </div>

                        </div>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
}