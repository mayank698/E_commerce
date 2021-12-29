import React, { Fragment, useEffect } from "react";
import "./MyOrders.css";
import { DataGrid } from "@mui/x-data-grid";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, myOrders } from "../../actions/orderAction";

const MyOrders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [];
  const rows = [];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name}-Orders`} />
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
          <Typography id="myOrdersHeading">{user.name}'s Order</Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
