import tw from "twin.macro";

const Text = tw.div`
mt-2 [word-break: keep-all] [font-weight: 400]`;

export default function DescLineCont(props) {
  return (
    <>
      <Text>{props.children}</Text>
    </>
  );
}
