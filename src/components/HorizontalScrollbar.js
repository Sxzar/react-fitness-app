import { Box } from "@mui/material";
import React from "react";

const HorizontalScrollbar = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    tile={item.tile || item}
                    m="0 40px"
                >
                    {item}
                </Box>
            ))}
        </div>
    );
};

export default HorizontalScrollbar;
