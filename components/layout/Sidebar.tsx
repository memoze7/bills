import Link from 'next/link'
export const Sidebar = () => {
    return (
      <div>
          <Link href='/'>Inicio</Link>
          <Link href='/bills/registers'>Registros</Link>
          <Link href='/bills/debts'>Deudas</Link>
          <Link href='/bills/budgets'>Presupuestos</Link>
          <Link href='/bills/bills'>Cuentas</Link>
          <Link href='/bills/goals'>Objetivos</Link>
      </div>
    )
}