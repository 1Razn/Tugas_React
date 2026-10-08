const LoginForm = () => {
  const styles = {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: "10px",
      mmaxWidth: "400px",
      margin: "auto",
      padding: "20px",
    },

    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },

    button: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }
  };
  return (
    <>
      <form style={styles.formContainer}>
        <input style={styles.input} type="text" placeholder="Name" />
        <input style={styles.input} type="text" placeholder="Email" />
        <input style={styles.input} type="password" placeholder="Password" />
        <button style={styles.button}>Login</button>
      </form>
    </>
  )
}

export default LoginForm