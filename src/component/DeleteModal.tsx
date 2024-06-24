import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
interface DeleteModal {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export default function DeleteModal(open: any,onClose: any, onConfirm: any) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Xác Nhận Xóa</DialogTitle>
      <DialogContent>
        <DialogContentText>Bạn có chắc chắn muốn xóa thông tin này không?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={onConfirm}>Xóa</Button>
      </DialogActions>
    </Dialog>
  )
}