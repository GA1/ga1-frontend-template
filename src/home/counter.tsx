import type { RootState } from '../state/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../state/slices/counter-slice'

export const Counter = ({ title }: { title: string }) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <span className='text-3xl'>{title}</span>
      <div className='flex flex-row'>
        <button className='p-4' aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <span className='p-4'>{count}</span>
        <button className='p-4' aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  )
}
