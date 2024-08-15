import React from 'react';

const UnsafeComponent: React.FC<{ script: string }> = ({ script }) => (
  <script>{script}</script>
);
