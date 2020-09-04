import styled from "styled-components"
import tw from "twin.macro"
import { SMALL_TEXT } from './fontSizes'

// export const StyledForm = styled.main.attrs({
//   className: "flex flex-col h-screen justify-center items-center bg-gray-100",
// })`
//   & {
//     form {
//       ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
//     }
//     input {
//       ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
//     }
//     button {
//       ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
//     }
// }`

/* Button Shared Component */
export const Button = styled.button.attrs({
    className: "transition duration-500 ease-in-out text-lg"
})`
    outline: 0 !important
`

export const RedButton = styled(Button).attrs({
    className: "bg-red-600 h-12 text-red-100 hover:bg-red-700 hover:text-red-200 px-6"
})``

/* Link Type Button */
export const ButtonLink = styled(Button).attrs({
    className: "text-gray-800 border-transparent border-b-2 hover:border-gray-700 mx-6"
})``

/** Styled Input */
export const StyledInput = styled.div.attrs({
    className: 'border border-blue-700 h-full w-full'
})`
    border-width: 3px
`

/** Background gradient */
export const BgGradient = styled.div.attrs((props) => ({
    className: `bg-gradient-to-l w-full`
}))`
    animation: fadeIn 2s linear forwards;
    position: absolute;
    z-index: -1;
    height: 90%;

    @keyframes fadeIn {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
`
export const BlueGradient = styled(BgGradient).attrs({
    className: 'from-blue-400'
})``

export const GreenGradient = styled(BgGradient).attrs({
    className: 'from-green-400'
})``

/** Text Font Sizes */
export const Text = styled.main.attrs({
    className: ''
})`
    font-size: ${props => props.fontSize};
    width: ${props => props.width};
`

/** Category Wrapper Style */
export const CategoryStyle = styled.div.attrs({
    className: 'shadow-lg bg-white mb-16 mx-4'
})`
    height: auto;
    width: 30%
`

/**  This is just a component with blue background color  */
export const ImageHeaderStyle = styled.div.attrs({
    className: 'w-full bg-blue-900 flex justify-between items-end'
})`
    height: 25vh;
`

/** overlay background */
export const Overlay = styled.div.attrs({
    className: `fixed w-screen h-screen z-40 bg-gray-500 bg-opacity-50 
    flex justify-center items-center left-0 top-0 right-0 bottom-0`
}) `
    & {
        section {
            height: 60vh;
            ${tw `w-1/3 bg-white px-16 py-4 z-10 flex flex-col justify-around text-gray-800 shadow-lg`}
        },
        Text {
            font-size: ${SMALL_TEXT}
        }
        div {
            ${tw `flex justify-between`}
        }
    }
`
export const OverlayClickBg = styled.div.attrs({
    className: `h-full w-full opacity-0 cursor-pointer z-0 absolute left-0 top-0 right-0 bottom-0`
})``

/** Nav Lists Styles */
export const NavLists = styled.div.attrs({
    className: "flex-1 flex justify-end items-center pr-8"
})``

/** Loader */
export const Loader = styled.div.attrs({
    className: `animate-spin h-12 w-12 border border-black border-l-0 border-r-0 rounded-full
    border-t-4 border-b-4`,
    viewBox: "0 0 24 24"
}) `
   
`