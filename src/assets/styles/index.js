import styled from "styled-components"
import tw from "twin.macro"

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
    className: ` bg-gradient-to-l w-full`
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
export const ImageContainer = styled.div.attrs({
    className: 'w-full bg-blue-900 flex justify-between items-end'
})`
    height: 25vh;
`
