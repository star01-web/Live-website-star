// components/Loader.jsx
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div 
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        style={{
          animation: 'spin 1s linear infinite'
        }}
      />
    </div>
  );
};

export default Loader;
