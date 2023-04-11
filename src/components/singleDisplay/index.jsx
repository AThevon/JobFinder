import './index.css';
import Logo from '../Logo';
import Date from '../Date';
import TypeOfWorkHours from '../TypeOfWorkHours';
import Title from '../Title';
import NameEnterprise from '../NameEnterprise';
import Location from '../Location';

const SingleDisplay = ({ data }) => {
    return (
        <article className='article-single'>
            <div className="first-container single">
                <Logo logoImg={data.logo} className="img-single"/>
                <div className="date-type single">
                    <TypeOfWorkHours
                        type={data.work_hours}
                        className={data.work_hours === 'full-time' ? 'full-time single' : 'part-time single'} />
                    <Date date={data.date} />
                </div>
            </div>
            <div className="second-container single">
                <Title title={data.title} />
                <NameEnterprise name={data.name} />
                <Location location={data.location} />
            </div>
            <p className="content-single">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad aspernatur amet. Iusto voluptatem dolore, rerum doloremque dolorem possimus ipsum iure, non consequatur aperiam impedit quam recusandae deleniti vero illum.
                Nemo totam, repellat debitis, animi, sunt autem obcaecati reiciendis molestiae saepe recusandae iusto accusantium est beatae deserunt eos minus quos ratione qui maxime. Eveniet maxime assumenda placeat distinctio, itaque tempora.
                Nobis voluptatum qui nisi sed totam pariatur! Earum libero, magni error quis in expedita esse laudantium nemo repudiandae sint sapiente praesentium, voluptate, saepe asperiores. Ex dicta nobis voluptate quo vero.
                Temporibus recusandae dicta cupiditate blanditiis, excepturi sit ipsam itaque eveniet repellat totam tenetur ducimus officia quidem ut obcaecati quos. Reprehenderit, dolor dignissimos quasi pariatur inventore fugit? Obcaecati debitis tempora provident!
                Quam ratione voluptatum sed, doloribus modi repellat ullam expedita beatae eligendi necessitatibus. Et, corporis ut laborum beatae culpa veritatis autem omnis at aut, repellat voluptate numquam explicabo aliquam expedita rerum?
                Asperiores, accusantium? Repudiandae ratione quis officia et ipsam ad laudantium veniam porro excepturi odio adipisci similique quasi ex, consequuntur eos aperiam sequi vitae dolorem exercitationem? Sed nemo suscipit possimus beatae?
            </p>
        </article>
    );
}

export default SingleDisplay;