import { useProtected } from '../hooks/useProtected'

const Account = () => {
  const [isLoading] = useProtected()

  return <div>{isLoading ? 'loading' : <div> c&apos;est validé</div>}</div>
}

export default Account
