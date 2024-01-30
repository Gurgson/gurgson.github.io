import { Variants } from "framer-motion";

export const FadeInTop : Variants = {
     
    initial:{
        translateY: "-50%",
        opacity: 0,
    },
    end: {
        translateY:0,
        opacity: 1
    }
    

}
export const fadeFromBottom : Variants = {
    initial:{
        translateY: "50%",
        opacity: 0,
    },
    end: {
        translateY:0,
        opacity: 1
    }
    
}
export const scale : Variants = {
    initial:{
        scale: 1
    },
    end: {
        scale: 0.9
    }
    
}
export const opacityUp : Variants = {
    initial:{
        opacity: 0,
        
    },
    end: {
        opacity: 1,
    }
    
}
export const imgAnimation : Variants = {
    initial:{
        rotateZ:-2.5
    },
    end: {
        rotateZ: 2.5
    }
    
}