import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const TaskDescriptionComponent = () => (
    <div className="flex flex-col gap-2 p-3 overflow-y-scroll primary-color grow">
        <div className="flex justify-between text-xs">
            <div className="flex items-center gap-2">
                <div className="rounded-full bg-white p-3"></div>
                <div className="primary-color-bold">creator of task</div>
                <div>5 days a go</div>
            </div>
            <span className="cursor-pointer rounded px-2 py-1 hover:bg-gray-700">
                Edit
            </span>
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusamus adipisci aliquid amet animi autem, cum delectus distinctio
            dolorum ea eaque eligendi enim hic in ipsum laudantium nihil nobis
            odit quaerat quam ratione sapiente tempore vero! Delectus enim est
            nostrum saepe ullam. Animi, ipsam tempora. Aliquid debitis delectus
            deleniti excepturi maiores maxime nesciunt nisi non obcaecati,
            ratione recusandae reiciendis tenetur totam velit voluptatum!
            Cupiditate deserunt, dolore enim, et ex fugit harum illum iste
            minima nulla odio pariatur repellat unde velit veniam voluptate
            voluptates voluptatibus voluptatum. Accusantium ad, animi delectus
            facilis illo quo repellendus sit? Consectetur dolorem iusto libero
            maxime sapiente! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus adipisci aliquam amet animi architecto autem commodi
            consequatur consequuntur dicta dolores ea, eaque eligendi et eum ex
            excepturi harum illum libero, magni minus neque nihil nobis nulla
            obcaecati optio praesentium qui quo recusandae sequi sint temporibus
            veniam vero voluptatem voluptatibus voluptatum.
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                deleniti maxime, rem repudiandae suscipit vel veniam. Animi
                asperiores commodi delectus ea eaque et facilis nam natus
                necessitatibus nobis, omnis optio quas quia recusandae unde
                voluptas voluptatum. Architecto blanditiis earum magni maxime
                reprehenderit. Beatae commodi culpa doloribus, exercitationem
                itaque saepe sint. Ab accusantium ad alias dolor eaque eius, eum
                fuga ipsa minus omnis, perferendis quae quas qui quo recusandae
                tenetur vel vero vitae! Alias blanditiis consectetur consequatur
                culpa doloremque eligendi impedit ipsum, itaque maxime obcaecati
                quidem reprehenderit tempora unde? Eos, explicabo illo inventore
                natus neque officiis quia rem repellendus saepe tempora!
            </p>
        </div>
        <div className="flex cursor-pointer">
            <div className="rounded-full px-2 py-1 text-xl primary-background">
                <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
            </div>
        </div>
    </div>
);

export default TaskDescriptionComponent;
