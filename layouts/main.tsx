import React, { PropsWithChildren } from "react";

export const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	return <div className="bg-red">{children}</div>;
};
