import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Collapse, 
  Button 
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      className="bg-[#1a1a1a] text-white rounded-xl overflow-hidden shadow-lg border border-zinc-800 transition-transform hover:scale-[1.02]"
      sx={{ maxWidth: 400, backgroundColor: '#1a1a1a', color: 'white' }}
    >
      {/* Image Container */}
      <div className="relative">
        <CardMedia
          component="img"
          height="200"
          image={event.imageUrl || "https://via.placeholder.com/400x200"}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
        
        {/* Date Capsule - Right End */}
        <div className="absolute top-4 right-4 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          {event.date}
        </div>
      </div>

      <CardContent className="p-5">
        <Typography 
          variant="h5" 
          component="div" 
          className="font-bold mb-2 text-white"
        >
          {event.title}
        </Typography>

        {/* Description Section */}
        <div className="text-gray-400 text-sm leading-relaxed">
          {expanded ? (
            <p>{event.description}</p>
          ) : (
            <p>
              {event.description.substring(0, 100)}...
            </p>
          )}
        </div>

        {/* Read More Toggle */}
        <Button
          onClick={handleExpandClick}
          className="mt-3 normal-case p-0 text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
          disableRipple
        >
          {expanded ? 'Show Less' : 'Read More'}
          {expanded ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;