"use client"
import Image from 'next/image'

export default function Page() {

  let player = "X"
  let table = ["", "", "", "", "", "", "", "", ""]

  function mark(index: number) {

    if (table[index] !== "") return
    table[index] = player

    if(player == "X"){
      player = "O"
    } else {
      player = "X"
    }
    render()
  }

  function render(){
    let tds = document.querySelectorAll("td")

    tds.forEach((td, index) => {
      td.innerHTML = table[index]
    })
  }

  return (
    <>
      <header className='flex flex-col items-center p-5 gap-3'>
        <h1 className='text-[30px]'>Jogo da velha NEXT</h1>
        <p>com DOM e sem table</p>
      </header>

      <article className='flex flex-col items-center gap-10'>
        <table>
          <tbody className='flex flex-col gap-3'>
            <tr className='flex gap-3'>
              <td onClick={() => mark(0)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(1)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(2)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
            </tr>
            <tr className='flex gap-3'>
              <td onClick={() => mark(3)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(4)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(5)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
            </tr><tr className='flex gap-3'>
              <td onClick={() => mark(6)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(7)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
              <td onClick={() => mark(8)} className='flex items-center justify-center w-[100px] h-[100px] border border-white text-3xl hover:bg-zinc-800 text-white cursor-pointer'></td>
            </tr>
          </tbody>
        </table>
      </article>
      
    </>
  )
}
