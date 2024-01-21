import Image from 'next/image';

export const UnderDevelopmentMessage = () => (
  <>
    <Image
      width={80}
      height={80}
      style={{
        margin: '7rem auto 0 auto',
        opacity: 0.8,
      }}
      alt="ic-repair"
      src="/images/icon-repair.svg"
    />
    <h3
      style={{
        textAlign: 'center',
        color: 'var(--orange-yellow-crayola)',
        opacity: 0.8,
        marginBottom: '3rem',
      }}
    >
      این قسمت در حال راه اندازی است
    </h3>
  </>
);
