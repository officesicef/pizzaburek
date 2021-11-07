export default {
  '@global': {
    '*::-webkit-scrollbar': {
      height: '5px',
      width: '5px',
      color: 'grey',
    },
    '*::-webkit-scrollbar-track:hover': {
      boxShadow: 'inset 0 0 5px #c0c0c0',
      borderRadius: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      borderRadius: '10px',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#00A3AD',
    },
  },
};
