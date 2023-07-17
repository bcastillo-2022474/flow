import { Link, LinkProps, useNavigate } from "react-router-dom";

type Props = {
    delay?: number;
    onDelayStart?: () => void;
    onDelayEnd?: () => void;
    to: string;
};

const wait = (sec: number) =>
    new Promise((resolve) => setTimeout(resolve, sec * 1000));

const DelayLink = ({
    delay,
    onDelayStart,
    onDelayEnd,
    to,
    ...otherProps
}: Props & LinkProps) => {
    const navigate = useNavigate();
    return (
        <Link
            {...otherProps}
            to={to}
            onClick={(e) => {
                e.preventDefault();

                async function run() {
                    onDelayStart?.();
                    await wait(delay as number);
                    navigate(to);
                    onDelayEnd?.();
                }

                run();
            }}
        ></Link>
    );
};

export default DelayLink;
