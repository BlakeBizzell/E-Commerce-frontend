const styles = {
// initialView.jsx Stylization
    initialViewDiv1: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        textAlign: "center",
    },
    initialViewImg1 : {
        height: "50%",
        display: "block",
        margin: "0 auto", 
    },
    initialViewBox1 : {
        component: "span",
        display: "inline-block", 
        mx: "2px", 
        transform: "scale(0.8)"   
    },
    initialViewCarousel1 : {
        zIndex: "0",
    },
    initialViewButton1 : {
        margin: "10px 0",
        background: "rgba(255, 255, 255, 0.3)",
        display: "block",
        textDecoration: "none",  
    },
// SignIn.jsx Stylization
    SignInBox1 : {
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  
    },
    SignInAvatar1 : {
        m: 1, 
        bgcolor: "secondary.main",  
    },
    SignInBox2 : {
        mt: 1,
    },
    SignInButton1 : {
        mt: 3, 
        mb: 2  
    },
// products.jsx Stlyization
    productsBox1 : {
        display: "flex", 
        flexWrap: "wrap", 
    },
    productsCard1 : {
        minWidth: 275, 
        maxWidth: 300, 
        m: 1 , 
    },
    productsImg1 : {
        height: "200px",
        display: "block",
        margin: "0 auto", 
    },
    productsDiv1 : {
        textAlign: "center"
    },
// SingleProduct.jsx Stylization
    SingleProductBox1 : {
        display: "flex", 
        justifyContent: "center",
        alignItems: "center", 
        minHeight: "100vh",
    },
    SingleProductCard1 : {
        minWidth: "20%", 
        maxWidth: "80%", 
        m: 1,
    },
//accountInformation.jsx Stylization 
    // 
    AIBox1 : {
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: "center",
        minHeight: "100vh" 
    },
    AICard1 : {
        width: "20%",
        height: "30%", 
        m: 1 ,
    },

    H4 : {
        margin: "0",
    },

    AIP : {
        margin: "0",
        marginBottom: "10px" 
    }



}

export default styles;