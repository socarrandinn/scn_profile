import { useFindOneLogistics } from '../../hooks/useFindOneLogistics'

const LogisticNameCell = ({ providerId }: { providerId: string }) => {
  const { data } = useFindOneLogistics(providerId)

  return (
    <div>{data?.name}</div>
  )
}

export default LogisticNameCell
