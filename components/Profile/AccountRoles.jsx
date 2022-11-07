import React from 'react'
import style from "./AccountRoles.module.scss";
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

const AccountRoles = ({ roles }) => {
  const user = useSelector((state) => state.user.data);
  const total_pay = Math.ceil(useSelector((state) => state.user.data?.total_pay))

  return (
    <>
      {(
        <div className={style.roles}>
          {/* <h2>Your achievements</h2>
          <div className={style.row}>
            {roles.length > 0 ? roles.map((item) => {
              return (
                <div className={style.col}>
                  <Paper evaluation={3} sx={{
                    borderRadius: '20px'
                  }}>
                    <div className={style.role}>
                      <div className={style.role__icon}>
                        <img src={item.image} width='100%' alt="role" />
                      </div>
                      <div className={style.role__text}>
                        <h3>{item.type}</h3>
                        <p>Get {item.discount}% discount on all products</p>
                        {total_pay >= item.score_pay ? (<p><CheckIcon />Active</p>) : <p>in process</p>}
                        <div className={style.role__progress} style={{ zIndex: 10 }}>
                          <div className={style.role__progress__bar} style={{
                            backgroundColor: `${total_pay >= item.score_pay && '#4c9950'}`,
                            width: `${parseInt(total_pay >= item.score_pay ? 100 : total_pay / item.score_pay * 100)}%`
                          }}>
                          </div>
                          <span>{total_pay >= item.score_pay ? 'completed' : `${item.score_pay.toLocaleString()} / ${total_pay.toLocaleString()}`}</span>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </div>
              )
            }) : null}
          </div > */}
        </div >
      )}
    </>
  )
}

export default AccountRoles