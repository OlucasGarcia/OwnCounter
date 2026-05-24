import { useState } from "react";

import { useFinance } from "../../context/FinanceContext";

export default function TransactionForm({
    closeForm,
}) {
    const { addTransaction } = useFinance();

    const [type, setType] = useState("income");

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [observation, setObservation] =
        useState("");

    function clearForm() {
        setType("income");
        setTitle("");
        setAmount("");
        setDate("");
        setObservation("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!title || !amount || !date) {
            return;
        }

        addTransaction({
            id: crypto.randomUUID(),
            type,
            title,
            amount: Number(amount),
            date,
            observation,
        });

        clearForm();

        closeForm();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="
          bg-white
          border
          border-[#C8CBFF]
          rounded-3xl
          shadow-sm
          px-5 py-6
          md:px-16 md:py-10
        "
            >

                <div className="flex flex-col
                                sm:flex-row
                                justify-center
                                gap-3
                                mb-8
                                md:mb-10">
                    <button
                        type="button"
                        onClick={() =>
                            setType("income")
                        }
                        className={`
                                    w-full
                                    sm:w-auto
                                    px-6
                                    md:px-10
                                    py-3 rounded-xl
                                    font-bold transition-all
                                ${type === "income"
                                ? "bg-[#5058CF] text-white"
                                : "bg-[#ECEBFA] text-[#5058CF]"
                            }
            `}
                    >
                        RECEITA
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setType("expense")
                        }
                        className={`
                                    w-full
                                    sm:w-auto
                                    px-6
                                    md:px-10
                                    py-3 rounded-xl
                                    font-bold transition-all
                                ${type === "expense"
                                ? "bg-[#5058CF] text-white"
                                : "bg-[#ECEBFA] text-[#5058CF]"
                            }
            `}
                    >
                        DESPESA
                    </button>
                </div>

                <div className="flex flex-col mb-6">
                    <label
                        className="
              text-[#5058CF]
              text-sm
              md:text-base
              font-bold
              mb-2
            "
                    >
                        Descrição
                    </label>

                    <input
                        type="text"
                        placeholder="Ex. Venda à vista"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="
              border border-[#BFC2FF]
              rounded-xl
              p-3
              md:p-4
              outline-none
              focus:border-[#5058CF]
            "
                    />
                </div>

                <div className="flex flex-col mb-6">
                    <label
                        className="
              text-[#5058CF]
              text-sm
              md:text-base
              font-bold
              mb-2
            "
                    >
                        Valor (R$)
                    </label>

                    <input
                        type="number"
                        placeholder="0,00"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        className="
              border border-[#BFC2FF]
              rounded-xl
              p-3
              md:p-4
              outline-none
              focus:border-[#5058CF]
            "
                    />
                </div>

                <div className="flex flex-col mb-6">
                    <label
                        className="
              text-[#5058CF]
              text-sm
              md:text-base
              font-bold
              mb-2
            "
                    >
                        Data
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) =>
                            setDate(e.target.value)
                        }
                        className="
              border border-[#BFC2FF]
              rounded-xl
              p-3
              md:p-4
              outline-none
              focus:border-[#5058CF]
            "
                    />
                </div>

                <div className="flex flex-col
                                sm:flex-row
                                justify-center
                                gap-4">
                    <button
                        type="submit"
                        className="
              bg-[#5058CF]
              hover:bg-[#434BC0]
              transition-all
              text-white
              font-bold
              w-full
              sm:w-auto
              px-8
              md:px-12
              py-3
              rounded-xl
            "
                    >
                        SALVAR
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            clearForm();
                            closeForm();
                        }}
                        className="
              border border-[#5058CF]
              text-[#5058CF]
              hover:bg-[#F2F3FF]
              transition-all
              font-bold
              w-full
              sm:w-auto
              px-8
              md:px-12
              py-3
              rounded-xl
            "
                    >
                        CANCELAR
                    </button>
                </div>
            </form>
        </div>
    );
}