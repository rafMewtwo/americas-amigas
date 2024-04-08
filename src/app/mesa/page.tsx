"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Mesa() {
    const [name, setName] = useState<string>("")

    const router = useRouter()

    const handleClick = async () => {
        try {
            await fetch("/api/", {
                method: "POST",
                body: JSON.stringify({ name }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("cadastrado com sucesso")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <input type="text" placeholder="digite seu nome" onChange={(e) => setName(e.target.value)} />
            <span>{name}</span>
            <button onClick={() => handleClick()}>Envia para banco</button>
            <button onClick={() => router.push('/')} >voltar</button>
        </div>
    );
  }
  