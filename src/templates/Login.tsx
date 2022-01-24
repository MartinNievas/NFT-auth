import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Login = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
  </div>
);
export { Login };
