import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGrid } from "..";
import { AppDispatch, clearCart, clearCartProduct, RootState } from "../../store/store";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { IitemCard } from "../../types";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface PaymentDetail {
  cardNo: number | string;
  cvv: number | string;
  expiryDate: any;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  borderRadius: "8px",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Payment: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2023-01-12T21:11:54'),
  );

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetail>({
    cardNo: "",
    cvv: "",
    expiryDate: value,
  });

  const { cartItem, cartProduct, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const nevigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handlePaymentDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const productSummary = (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProduct?.map((product: IitemCard) => (
            <StyledTableRow key={product?.title}>
              <StyledTableCell component="th" scope="row">
                {product?.title.length >= 12
                  ? product?.title
                  : product?.title.substring(0, 12) + "..."}
              </StyledTableCell>
              <StyledTableCell align="right">${product?.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const handlePaymentSubmittion = (e: React.SyntheticEvent ) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    dispatch(clearCart())
    dispatch(clearCartProduct())
    nevigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1, m: "auto", marginTop: 10, minHeight: "70%", p: 3 }}>
      <Grid container sx={filterGrid}>
        <Box display="inline" text-align="left">
          <Typography
            // display="inline"
            // text-align="left"
            variant="h6"
            sx={{ maxWidth: 300 }}
          >
            Payment Details
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ mt: 3, backgroundColor: "white", p: 3, borderRadius: 2 }}
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ mt: 3, p: 3 }}>{productSummary}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
           component="form"
            sx={{ mt: 3, p: 3 }}
            onSubmit={handlePaymentSubmittion}
          >
             
            <Grid container spacing={2}>
                
              <Grid item xs={12}>
            
                <TextField
                  autoComplete="given-number"
                  name="cardNo"
                  required
                  fullWidth
                  type="number"
                  id="cardNo"
                  value={paymentDetails.cardNo}
                  onChange={handlePaymentDetailChange}
                  label="Card No"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="cvv"
                  label="CVV"
                  name="cvv"
                  autoComplete="cvv"
                  value={paymentDetails.cvv}
                  onChange={handlePaymentDetailChange}
                />
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                //   required
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params: any) => <TextField {...params} />}
                />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Pay ${totalPrice}
            </Button>
         
          </Box>
        </Grid>
      </Grid>
      <Modal
        hideBackdrop
        open={showModal}
        // onClose={handleCloseModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Your Payment is successful</h2>
          <p id="child-modal-description">Thanks for shopping</p>
          <Button onClick={handleCloseModal}>Go to HomePage</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Payment;
