import { Button } from '@mui/material'

interface IDeleteAudienceButton {
  handleClick: () => void
}

const DeleteAudienceButton = ({ handleClick }: IDeleteAudienceButton) => {
  return (
    <Button sx={{ width: '100%', margin: '0 auto 1rem auto' }} color="error" size='small' onClick={handleClick}>
        Eliminar audiencia
    </Button>
  )
}

export default DeleteAudienceButton
