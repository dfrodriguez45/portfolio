import PropTypes from 'prop-types';

export default function Layout({children}) {
  return (
    <main className="container m-auto grid min-h-dvh gap-2 p-4 sm:grid-cols-4">
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};