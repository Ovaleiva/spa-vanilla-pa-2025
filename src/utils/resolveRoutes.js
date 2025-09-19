const resolveRoutes = (route) => {
  if (route === '/' || route === '') {
    return '/';     // Home
  }

  // si hay algo después del hash, asumimos que es un ID de lanzamiento
  return '/:id';
};

export default resolveRoutes;