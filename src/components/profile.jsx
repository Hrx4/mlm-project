import { Button, Divider } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import React from 'react'

const profile = () => {
  return (
    <>
        <div className='profile'>
            <div className="profile-border">
                <div className="profile-details">
                    <div className="avatar">avatar</div>
                    <div className="name">Kamal paul</div>
                    <div className="member-id">Member ID : SH414525</div>
                    <div className="active">Active</div>
                    <Button size="small" variant="contained" color="success">Welcome Letter</Button>
                </div>
                <div className="sponser">
                    <Divider/>
                    <div className="sponser-id">
                        <div className="id">SPONSOR ID :</div>
                        <div className="number">SH403756</div>
                    </div>
                    <Divider/>
                    <div className="sponser-id">
                        <div >Activation: </div>
                        <div className="activation-number">2023-02-26 23:45:53</div>
                    </div>
                    <Divider/>
                    <div className="sponser-id">
                        <div className="id">Rank: </div>
                        <div className="number">N/A</div>
                    </div>
                    <Divider/>
                </div>
                <div className="referal">
                    <div className="referal-links">
                        Referral Links
                    </div>
                    <div className="referal-icons">
                        <FileCopyIcon color="secondary"/>
                        <FacebookIcon color="primary"/>
                        <WhatsAppIcon color="success"/>
                        <GroupAddIcon color="success"/>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default profile