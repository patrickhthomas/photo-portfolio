import React from 'react';
import styled from '@emotion/core';


const MyMenu = styled.div`
  visibility: hidden;
  opacity; 0;
  width: 50vw;
  padding-top: .5em;
  border-radius: .2em;
  overflow: hidden;
  position: absolute;
  transition: all 0.55s;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  ul{
    display: grid;
  }
  li {
    background: ${props => props.theme.colors.white};
    display: flex;
    padding: 1.5em;
    list-style: none;
    margin: .5em;
    box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .2);
    cursor: pointer;
    z-index: 2;
  }
  a{
    color: black;
    cursor: pointer;
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    visibility: hidden;
    opacity; 0;
  }
  &.open {
    visibility: visible;
    opacity; 1;
  }
`


export default function MenuModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
      <MyMenu>
        <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.slug} activeStyle={activeModalStyle}>
               {link.name}
            </Link>
          </li>
          ))}
        </ul>     
    </MyMenu>
        </Fade>
      </Modal>
    </div>
  );
}