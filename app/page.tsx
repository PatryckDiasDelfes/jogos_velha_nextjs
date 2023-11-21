"use client"

import { useState } from "react"

export default function Page() {

  const [player, setPlayer] = useState ("")

  const [table, setTable] = useState (
    ["", "", "", "", "", "", "", "", ""]
  )

  function mark(index:number) {

    if (table[index] !== "") return

     if (player == "X") {
      setPlayer("O")
     } else {
      setPlayer("X")
     }

    table[index] = player
    setTable([...table])

    checkWin()

  }

  function checkWin() {

// Horizontal
    if (table[0] == table[1] && table[0] == table[2] && table[0] != "") void alert("Jogador "  + player + " ganhou")
    if (table[3] == table[4] && table[3] == table[5] && table[3] != "") alert("Jogador "  + player + " ganhou")
    if (table[6] == table[7] && table[6] == table[8] && table[6] != "") alert("Jogador "  + player + " ganhou")
    
// Vertical
    if (table[0] == table[3] && table[0] == table[6] && table[0] != "") alert("Jogador "  + player + " ganhou")
    if (table[1] == table[4] && table[1] == table[7] && table[1] != "") alert("Jogador "  + player + " ganhou")
    if (table[2] == table[5] && table[2] == table[8] && table[2] != "") alert("Jogador "  + player + " ganhou")

// Diagonal
    if (table[0] == table[4] && table[0] == table[8] && table[0] != "") alert("Jogador "  + player + " ganhou")
    if (table[2] == table[4] && table[2] == table[6] && table[2] != "") alert("Jogador "  + player + " ganhou")
    
  }


  function stop(){

  }

  return (
    <>
    <header className='flex flex-col items-center p-5 gap-3'>
      <h1 className='text-[30px]'>Jogo da velha NEXT</h1>
      <p>Sem DOM e com table</p>
    </header>

    <article className='flex flex-col items-center gap-10'>
      <table>
        <tbody className='flex flex-col gap-3'>
          <tr className='flex gap-3'>
            <td onClick={() => mark(0)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[0]}</td>
            <td onClick={() => mark(1)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[1]}</td>
            <td onClick={() => mark(2)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[2]}</td>
          </tr><tr className='flex gap-3'>
            <td onClick={() => mark(3)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[3]}</td>
            <td onClick={() => mark(4)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[4]}</td>
            <td onClick={() => mark(5)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[5]}</td>
          </tr><tr className='flex gap-3'>
            <td onClick={() => mark(6)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[6]}</td>
            <td onClick={() => mark(7)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[7]}</td>
            <td onClick={() => mark(8)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'>{table[8]}</td>
          </tr>
        </tbody>
      </table>
    </article>
    
  </>
  )
}