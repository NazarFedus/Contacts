import { FC } from "react";
import { IContactProps } from "./ContactCardTypes";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

// img //
import phone from './icons/iconPhone.svg'
import email from './icons/iconEmail.svg'

const ContactCard: FC<IContactProps> = ({ user, onDelete }) => {

  const deleteHandler = ():void => {
    onDelete(user.id)
  }

  return (
    <Card className='card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={deleteHandler}>
             <DeleteIcon />
          </IconButton>
        }
        title={user.name}
      />
      <CardContent className="p-[20px]">
        <div className="flex items-center gap-[12px]">
          <img src={phone} alt="phone" />
          <p className="info-text">{user.phone}</p>
        </div>
        <div className="flex items-center mt-[12px] gap-[12px]">
          <img src={email} alt="email" />
          <p className="info-text">{user.email}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
