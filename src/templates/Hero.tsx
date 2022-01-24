import Link from 'next/link';
import { Background } from '../background/Background';
import { MetamaskLoginButton } from '../hero/MetamaskLoginButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <MetamaskLoginButton
          title={
            <>
              {'Grow your business with\n'}
              <span className="text-primary-500">NFT technology</span>
            </>
          }
          description="We are the team of talented developer making metaverse accesible to everyone"
        />
      </Section>
    </Background>
  );
};

export { Hero };
